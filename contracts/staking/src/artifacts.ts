/*
 * -----------------------------------------------------------------------------
 * Warning: This file is auto-generated by contracts-gen. Don't edit manually.
 * -----------------------------------------------------------------------------
 */
import { ContractArtifact } from 'ethereum-types';

import * as IStaking from '../generated-artifacts/IStaking.json';
import * as IStakingEvents from '../generated-artifacts/IStakingEvents.json';
import * as IStakingProxy from '../generated-artifacts/IStakingProxy.json';
import * as IStorage from '../generated-artifacts/IStorage.json';
import * as IStorageInit from '../generated-artifacts/IStorageInit.json';
import * as IStructs from '../generated-artifacts/IStructs.json';
import * as IZrxVault from '../generated-artifacts/IZrxVault.json';
import * as LibCobbDouglas from '../generated-artifacts/LibCobbDouglas.json';
import * as LibFixedMath from '../generated-artifacts/LibFixedMath.json';
import * as LibFixedMathRichErrors from '../generated-artifacts/LibFixedMathRichErrors.json';
import * as LibProxy from '../generated-artifacts/LibProxy.json';
import * as LibSafeDowncast from '../generated-artifacts/LibSafeDowncast.json';
import * as LibStakingRichErrors from '../generated-artifacts/LibStakingRichErrors.json';
import * as MixinAbstract from '../generated-artifacts/MixinAbstract.json';
import * as MixinConstants from '../generated-artifacts/MixinConstants.json';
import * as MixinCumulativeRewards from '../generated-artifacts/MixinCumulativeRewards.json';
import * as MixinDeploymentConstants from '../generated-artifacts/MixinDeploymentConstants.json';
import * as MixinExchangeFees from '../generated-artifacts/MixinExchangeFees.json';
import * as MixinExchangeManager from '../generated-artifacts/MixinExchangeManager.json';
import * as MixinFinalizer from '../generated-artifacts/MixinFinalizer.json';
import * as MixinParams from '../generated-artifacts/MixinParams.json';
import * as MixinScheduler from '../generated-artifacts/MixinScheduler.json';
import * as MixinStake from '../generated-artifacts/MixinStake.json';
import * as MixinStakeBalances from '../generated-artifacts/MixinStakeBalances.json';
import * as MixinStakeStorage from '../generated-artifacts/MixinStakeStorage.json';
import * as MixinStakingPool from '../generated-artifacts/MixinStakingPool.json';
import * as MixinStakingPoolRewards from '../generated-artifacts/MixinStakingPoolRewards.json';
import * as MixinStorage from '../generated-artifacts/MixinStorage.json';
import * as ReadOnlyProxy from '../generated-artifacts/ReadOnlyProxy.json';
import * as Staking from '../generated-artifacts/Staking.json';
import * as StakingProxy from '../generated-artifacts/StakingProxy.json';
import * as TestAssertStorageParams from '../generated-artifacts/TestAssertStorageParams.json';
import * as TestCobbDouglas from '../generated-artifacts/TestCobbDouglas.json';
import * as TestCumulativeRewardTracking from '../generated-artifacts/TestCumulativeRewardTracking.json';
import * as TestDelegatorRewards from '../generated-artifacts/TestDelegatorRewards.json';
import * as TestExchangeManager from '../generated-artifacts/TestExchangeManager.json';
import * as TestFinalizer from '../generated-artifacts/TestFinalizer.json';
import * as TestInitTarget from '../generated-artifacts/TestInitTarget.json';
import * as TestLibFixedMath from '../generated-artifacts/TestLibFixedMath.json';
import * as TestLibProxy from '../generated-artifacts/TestLibProxy.json';
import * as TestLibProxyReceiver from '../generated-artifacts/TestLibProxyReceiver.json';
import * as TestLibSafeDowncast from '../generated-artifacts/TestLibSafeDowncast.json';
import * as TestMixinParams from '../generated-artifacts/TestMixinParams.json';
import * as TestMixinStake from '../generated-artifacts/TestMixinStake.json';
import * as TestMixinStakeStorage from '../generated-artifacts/TestMixinStakeStorage.json';
import * as TestProtocolFees from '../generated-artifacts/TestProtocolFees.json';
import * as TestStaking from '../generated-artifacts/TestStaking.json';
import * as TestStakingNoWETH from '../generated-artifacts/TestStakingNoWETH.json';
import * as TestStakingProxy from '../generated-artifacts/TestStakingProxy.json';
import * as TestStorageLayoutAndConstants from '../generated-artifacts/TestStorageLayoutAndConstants.json';
import * as ZrxVault from '../generated-artifacts/ZrxVault.json';
import * as ZrxVaultBackstop from '../generated-artifacts/ZrxVaultBackstop.json';
export const artifacts = {
    ReadOnlyProxy: ReadOnlyProxy as ContractArtifact,
    Staking: Staking as ContractArtifact,
    StakingProxy: StakingProxy as ContractArtifact,
    ZrxVault: ZrxVault as ContractArtifact,
    ZrxVaultBackstop: ZrxVaultBackstop as ContractArtifact,
    MixinExchangeFees: MixinExchangeFees as ContractArtifact,
    MixinExchangeManager: MixinExchangeManager as ContractArtifact,
    MixinConstants: MixinConstants as ContractArtifact,
    MixinDeploymentConstants: MixinDeploymentConstants as ContractArtifact,
    MixinStorage: MixinStorage as ContractArtifact,
    IStaking: IStaking as ContractArtifact,
    IStakingEvents: IStakingEvents as ContractArtifact,
    IStakingProxy: IStakingProxy as ContractArtifact,
    IStorage: IStorage as ContractArtifact,
    IStorageInit: IStorageInit as ContractArtifact,
    IStructs: IStructs as ContractArtifact,
    IZrxVault: IZrxVault as ContractArtifact,
    LibCobbDouglas: LibCobbDouglas as ContractArtifact,
    LibFixedMath: LibFixedMath as ContractArtifact,
    LibFixedMathRichErrors: LibFixedMathRichErrors as ContractArtifact,
    LibProxy: LibProxy as ContractArtifact,
    LibSafeDowncast: LibSafeDowncast as ContractArtifact,
    LibStakingRichErrors: LibStakingRichErrors as ContractArtifact,
    MixinStake: MixinStake as ContractArtifact,
    MixinStakeBalances: MixinStakeBalances as ContractArtifact,
    MixinStakeStorage: MixinStakeStorage as ContractArtifact,
    MixinCumulativeRewards: MixinCumulativeRewards as ContractArtifact,
    MixinStakingPool: MixinStakingPool as ContractArtifact,
    MixinStakingPoolRewards: MixinStakingPoolRewards as ContractArtifact,
    MixinAbstract: MixinAbstract as ContractArtifact,
    MixinFinalizer: MixinFinalizer as ContractArtifact,
    MixinParams: MixinParams as ContractArtifact,
    MixinScheduler: MixinScheduler as ContractArtifact,
    TestAssertStorageParams: TestAssertStorageParams as ContractArtifact,
    TestCobbDouglas: TestCobbDouglas as ContractArtifact,
    TestCumulativeRewardTracking: TestCumulativeRewardTracking as ContractArtifact,
    TestDelegatorRewards: TestDelegatorRewards as ContractArtifact,
    TestExchangeManager: TestExchangeManager as ContractArtifact,
    TestFinalizer: TestFinalizer as ContractArtifact,
    TestInitTarget: TestInitTarget as ContractArtifact,
    TestLibFixedMath: TestLibFixedMath as ContractArtifact,
    TestLibProxy: TestLibProxy as ContractArtifact,
    TestLibProxyReceiver: TestLibProxyReceiver as ContractArtifact,
    TestLibSafeDowncast: TestLibSafeDowncast as ContractArtifact,
    TestMixinParams: TestMixinParams as ContractArtifact,
    TestMixinStake: TestMixinStake as ContractArtifact,
    TestMixinStakeStorage: TestMixinStakeStorage as ContractArtifact,
    TestProtocolFees: TestProtocolFees as ContractArtifact,
    TestStaking: TestStaking as ContractArtifact,
    TestStakingNoWETH: TestStakingNoWETH as ContractArtifact,
    TestStakingProxy: TestStakingProxy as ContractArtifact,
    TestStorageLayoutAndConstants: TestStorageLayoutAndConstants as ContractArtifact,
};
