/*

  Copyright 2020 ZeroEx Intl.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

*/

pragma solidity ^0.6.5;
pragma experimental ABIEncoderV2;

import "./LibStorage.sol";


/// @dev Storage helpers for the `Migrate` feature.
library LibMigrateStorage {

    /// @dev Storage bucket for this feature.
    struct Storage {
        // The owner of this contract prior to the `migrate()` call.
        address migrationOwner;
    }

    /// @dev Get the storage bucket for this contract.
    function getStorage() internal pure returns (Storage storage stor) {
        uint256 storageOffset = LibStorage.getStorageOffset(
            LibStorage.StorageId.Migrate
        );
        assembly { stor_slot := storageOffset }
    }
}