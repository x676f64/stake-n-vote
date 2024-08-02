"use client";

import { ChainSwitch } from "./chain-switch";
import { DelegateStakeButtons } from "./buttons";

export function DelegateAndStake() {
  return (
    <>
      {" "}
      <div className="max-w-xl">
        <h2 className={`text-center mb-12 text-xl font-bold`}>
          Support sensible Treasury spending without corruption
        </h2>
        <ChainSwitch />
        <DelegateStakeButtons />
      </div>
    </>
  );
}
