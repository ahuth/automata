type Rule = {
  inputs: number[],
  output: number,
};

export type Type = Rule;

export function create(inputs: number[], output: number): Rule {
  return { inputs, output };
}

export function machineReadableInputs(rule: Rule): string {
  return rule.inputs.join('');
}

export function humanReadableInputs(rule: Rule): string {
  return rule.inputs.join();
}
