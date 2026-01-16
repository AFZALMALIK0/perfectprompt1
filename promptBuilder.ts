export type PromptBuildInput = {
  idea: string;
  audience?: string;
  goal?: string;
  tone?: string;
  format?: string;
  constraints?: string;
  mustInclude?: string;
  language?: string;
};

export function buildPrompt(i: PromptBuildInput) {
  const audience = i.audience?.trim();
  const goal = i.goal?.trim();
  const tone = i.tone?.trim();
  const format = i.format?.trim();
  const constraints = i.constraints?.trim();
  const mustInclude = i.mustInclude?.trim();
  const language = i.language?.trim();

  const parts: string[] = [];

  parts.push("ROLE:");
  parts.push("You are an expert assistant and prompt engineer.");
  parts.push("");

  parts.push("TASK:");
  parts.push(i.idea.trim());
  if (goal) parts.push(`Primary goal: ${goal}`);
  if (audience) parts.push(`Target audience: ${audience}`);
  parts.push("");

  parts.push("REQUIREMENTS:");
  if (tone) parts.push(`- Tone: ${tone}`);
  if (format) parts.push(`- Output format: ${format}`);
  if (language) parts.push(`- Language: ${language}`);
  parts.push("- Ask 2–5 short clarifying questions ONLY if necessary.");
  parts.push("- If info is missing, make reasonable assumptions and state them briefly.");
  if (constraints) parts.push(`- Constraints: ${constraints}`);
  if (mustInclude) parts.push(`- Must include: ${mustInclude}`);
  parts.push("");

  parts.push("OUTPUT:");
  parts.push("1) Brief plan (3–6 bullets)");
  parts.push("2) Final answer in the requested format");
  parts.push("3) Optional: a reusable template version of the answer");

  return parts.join("\n");
}
