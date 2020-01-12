type Bit = 0 | 1;

type Rule = {
  [key: string]: Bit,
};

export type Type = Rule;

type Input = {
  in: Bit[],
  out: Bit,
};

type Inputs = Input[];

export function create(inputs: Inputs): Rule {
  const output: Rule = {};

  inputs.forEach(function (input) {
    const key = serializeBits(input.in);
    output[key] = input.out;
  });

  return output;
}

export function apply(rule: Rule, neighbors: Bit[]): Bit {
  const key = serializeBits(neighbors);
  return rule[key];
}

function serializeBits(bits: Bit[]): string {
  return bits.join('');
}
