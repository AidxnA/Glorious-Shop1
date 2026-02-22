const { exec } = require("child_process");

function runCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        error.stdout = stdout;
        error.stderr = stderr;
        reject(error);
      } else {
        resolve(stdout || stderr);
      }
    });
  });
}

async function commitAndPush() {
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token || token.startsWith("github_pat_")) {
      console.log("GITHUB_TOKEN not set or is a placeholder. Skipping auto-commit.");
      return;
    }

    // Set user for commit
    await runCommand('git config --global user.name "IDX Auto Commit"');
    await runCommand('git config --global user.email "autocommit@idx.dev"');

    // Add changes
    await runCommand("git add .");

    // Check for changes
    const status = await runCommand("git status --porcelain");
    if (!status) {
      console.log("No changes to commit.");
      return;
    }

    // Commit changes
    await runCommand('git commit -m "Auto-update Firebase files"');

    // Configure remote URL with token for push
    const originUrl = await runCommand("git config --get remote.origin.url");
    const authedUrl = originUrl.trim().replace("https://github.com/", `https://${token}@github.com/`);
    
    // Push changes using the authenticated URL
    await runCommand(`git push ${authedUrl} main`);
    
    console.log("✅ Firebase files committed and pushed!");
  } catch (err) {
    console.error("❌ Error during auto-commit:", err.message);
    if(err.stdout) console.error("STDOUT:", err.stdout);
    if(err.stderr) console.error("STDERR:", err.stderr);
  }
}

commitAndPush();
