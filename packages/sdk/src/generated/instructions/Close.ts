/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category Close
 * @category generated
 */
export const CloseStruct = new beet.BeetArgsStruct<{ instructionDiscriminator: number }>(
  [['instructionDiscriminator', beet.u8]],
  'CloseInstructionArgs',
);
/**
 * Accounts required by the _Close_ instruction
 *
 * @property [_writable_] jsonAccount The account to store the metadata in.
 * @property [_writable_] jsonMetadataAccount The account to store the json account's metadata in.
 * @property [_writable_, **signer**] payer The account that will pay for the transaction and rent.
 * @category Instructions
 * @category Close
 * @category generated
 */
export type CloseInstructionAccounts = {
  jsonAccount: web3.PublicKey;
  jsonMetadataAccount: web3.PublicKey;
  payer: web3.PublicKey;
  systemProgram?: web3.PublicKey;
};

export const closeInstructionDiscriminator = 1;

/**
 * Creates a _Close_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Close
 * @category generated
 */
export function createCloseInstruction(
  accounts: CloseInstructionAccounts,
  programId = new web3.PublicKey('jsonDR1w3Dp3aBiVFcbUGfKFyNmUD65wwveiVG6DUnU'),
) {
  const [data] = CloseStruct.serialize({
    instructionDiscriminator: closeInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.jsonAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.jsonMetadataAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
