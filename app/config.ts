import { IconSvgProps, KusamaIcon, PolkadotIcon } from "./ui/icons";
// Desc: Configuration file for the app

// Kusamarian Delegators
export const POLKADOT_DELEGATOR =
  "13EyMuuDHwtq5RD6w3psCJ9WvJFZzDDion6Fd2FVAqxz1g7K";

export const KUSAMA_DELEGATOR =
  "DCZyhphXsRLcW84G9WmWEXtAA8DKGtVGSFZLJYty8Ajjyfa";

// Kusamarian Validators
export const POLKADOT_VALIDATOR =
  "13zRKESAgaKG4xyYrZnAA4Qdu1iVVMsrdiAnhnnnd4CB6TpU";

export const KUSAMA_VALIDATOR =
  "FZjqDWyTA4iP5nUfdYCurwVBz15bj8u1bH3wA5PYmP9fE3j";

export const CHAIN_CONFIG: {
  [key: string]: {
    ss58Format: number;
    tokenDecimals: number;
    tokenSymbol: string;
    maxNominators: number;
    delegator: string;
    validator: string;
    validator_set: string[];
    poolId?: number;
  };
} = {
  Polkadot: {
    ss58Format: 0,
    tokenDecimals: 10,
    tokenSymbol: "DOT",
    maxNominators: 16,
    delegator: POLKADOT_DELEGATOR,
    validator: POLKADOT_VALIDATOR,
    poolId: 62, //ChaosDAO pool,
    validator_set: [
      "12gPFmRqnsDhc9C5DuXyXBFA23io5fSGtKTSAimQtAWgueD2",
      "16A4n4UQqgxw5ndeehPjUAobDNmuX2bBoPXVKj4xTe16ktRN",
      "14ices1G5qTmqhMfDVBECh4jotNDGTLu8fhE9YktWT3cLF2F",
      "123kFHVth2udmM79sn3RPQ81HukrQWCxA1vmTWkGHSvkR4k1",
      "16ce9zrmiuAtdi9qv1tuiQ1RC1xR6y6NgnBcRtMoQeAobqpZ",
      "152QidDC4QrtMCyRGiQmvrNyjntvMg2XouCSdoPSeqUNTvsq",
      "15wepZh1jWNqxBjsgErm8HmYiE21n79c5krQJeTsYAjHddeM",
      "15iA5hpjUecWBbf38Nfegwmtyux25o3LrGaNodfZDxq5nXXE",
      //"153YD8ZHD9dRh82U419bSCB5SzWhbdAFzjj4NtA5pMazR2yC",
      //"126RwaHn4MDekLWfUYfiqcVbiQHapwDSAT9vZZS15HLqfDJh",
      //"1cFsLn7o74nmjbRyDtMAnMpQMc5ZLsjgCSz9Np2mcejUK83",
      //"123kFHVth2udmM79sn3RPQ81HukrQWCxA1vmTWkGHSvkR4k1",
      //"16ce9zrmiuAtdi9qv1tuiQ1RC1xR6y6NgnBcRtMoQeAobqpZ",
    ],
  },
  Kusama: {
    ss58Format: 2,
    tokenDecimals: 12,
    tokenSymbol: "KSM",
    maxNominators: 24,
    delegator: KUSAMA_DELEGATOR,
    validator: KUSAMA_VALIDATOR,
    validator_set: [
      "ECLwZzFusnTr6hdztrkVaTKeQoWxKZBh9e8EzdG92QX7PAy",
      "FvdwMNP57nRWEsNZZsrHWKqnbmduy4jBAC8MeLmgi9Yp8sA",
      "FVAFUJhJy9tj1X4PaEXX3tDzjaBEVsVunABAdsDMD4ZYmWA",
      "EyQ1wV8jQdKYEWh7FiN2mnkFzAepfq6LfKbWLy7qQkLynGg",
      "HWyLYmpW68JGJYoVJcot6JQ1CJbtUQeTdxfY1kUTsvGCB1r",
      "DuLr6CeLXezrfumF6EkqLeAx9paMcADYU6zHpSZVB8gvjht",
      "Ff3xdNrXA47svhiTJHj9uNhxLo29PYjYcJ9cUseAd9FK6iQ",
      "Hf8C626KBAjitMV7w8AhQWDCiPgUU47htEwbomq5mDMKeyL",
      "GLSikJaXTVWvWtUhzB3Bj6xb5TcnhTUp6EuAkxaCohT9UBv",
      "HRgP5To1qDAfaSVAFouJa6oixoNJRRLtjUctwS6Euz6kbUh",
      "H6rdnNwvHFKw5tfF7kXSssta5AYmysrJrZkRmAbzw6Vm3p8",
      "D3Sr3PozgPypkBzKBheGSJbqu8m4idenBPaWtZUXLWPtjJT",
      "DUqVsPLuFLJL2Ev7S7UeWLzVwqk9H7KpezCozKFLrf75bfR",
      "J3gcCvbntebJUFxETakYBiCaazLy8gsWbS3fVwsHfqT3Lhs",
      "DVw4Zkfva2MPibAsr8vgoha1T2ow8zreoTWGyBDioQBdfMM",
      "GA7j1FHWXpEU4kavowEte6LWR3NgZ8bkv4spWa9joiQF5R2",
      "GL7MYnpQr7jgJqK8wSRUQuob1TvTY7uRJP6LUNeUyvMUhQR",
      "EvBGLLKdbQeEQuybFBvNmPwZZN54eiCVQvC6gcQXc8zGWeC",
      "Eices1KaGTYqiazfjJpwyjnz5UzqTxULeYqnmeJNz49gs19",
      "EXGbhMrQubm7pRkUSkTEGi2rmR764ZM7kStfCRo2cZYa8VE",
      "Hk7snkgFNhrDRfwveEdpwgwu6D9uUmXwcLy3dZgM2EhHVJq",
      "FvR2jsv8ztP6PphQ6qwPJRNMKWCULcwHAgStLFR6u7zkwqc",
      "FkQVeVuQowuQB7HxzR1qJEbFjBiuixQQYZwpu2Fztm2qbmv",
    ],
  },
};
