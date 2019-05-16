import React from "react";
import GitHubForkRibbon from "react-github-fork-ribbon";

export default function ForkRibbon() {
  return (
    <GitHubForkRibbon
      position="right-bottom"
      color="red"
      href="https://github.com/piyush97/GoGitter"
      target="_blank"
    >
      Fork me on GitHub
    </GitHubForkRibbon>
  );
}
