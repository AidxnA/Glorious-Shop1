const { exec } = require("child_process");

function runCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) reject(error);
      else resolve(stdout || stderr);
    });
  });
}

async function commitAndPush() {
  try {
    await runCommand("git add .");
    await runCommand(`git commit -m "Auto-update Firebase files"`);
    await runCommand("git push origin main");
    console.log("✅ Firebase files committed and pushed!");
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

commitAndPush();
