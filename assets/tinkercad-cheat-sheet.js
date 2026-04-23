const shortcutModeText = document.getElementById("shortcutModeText");
const toggleButtons = document.querySelectorAll("[data-platform-toggle]");
const shortcutBadges = document.querySelectorAll(".shortcut[data-shortcut-mac]");

function preferredPlatform() {
  const platform = navigator.platform || navigator.userAgent || "";
  return /mac/i.test(platform) ? "mac" : "windows";
}

function applyPlatform(mode) {
  shortcutBadges.forEach((badge) => {
    const label = badge.dataset[mode === "mac" ? "shortcutMac" : "shortcutWindows"];
    badge.textContent = label || "";
  });

  toggleButtons.forEach((button) => {
    const active = button.dataset.platformToggle === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  shortcutModeText.textContent =
    mode === "mac"
      ? "Mac shortcuts are showing right now."
      : "Windows shortcuts are showing right now.";
}

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyPlatform(button.dataset.platformToggle);
  });
});

applyPlatform(preferredPlatform());
