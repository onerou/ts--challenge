type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

type Includes<T extends unknown[], U> = U extends T[number] ? true : false;

// extends 的行为本身就是有True为True
