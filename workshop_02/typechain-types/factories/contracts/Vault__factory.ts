/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Vault, VaultInterface } from "../../contracts/Vault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WITHDRAWER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWithdrawAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxAmount",
        type: "uint256",
      },
    ],
    name: "setMaxWithdrawAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isEnable",
        type: "bool",
      },
    ],
    name: "setWithdrawEnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawEnable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200222c3803806200222c8339818101604052810190620000379190620004b5565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a49190620004f8565b60405180910390fd5b620000be81620000eb60201b60201c565b50620000e36000801b620000d7620001af60201b60201c565b620001b760201b60201c565b505062000515565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080620001cc84846200020860201b60201c565b90508015620001fe57620001fc83600260008781526020019081526020016000206200030b60201b90919060201c565b505b8091505092915050565b60006200021c83836200034360201b60201c565b6200030057600180600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200029c620001af60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905062000305565b600090505b92915050565b60006200033b836000018373ffffffffffffffffffffffffffffffffffffffff1660001b620003ae60201b60201c565b905092915050565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000620003c283836200042860201b60201c565b6200041d57826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905062000422565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200047d8262000450565b9050919050565b6200048f8162000470565b81146200049b57600080fd5b50565b600081519050620004af8162000484565b92915050565b600060208284031215620004ce57620004cd6200044b565b5b6000620004de848285016200049e565b91505092915050565b620004f28162000470565b82525050565b60006020820190506200050f6000830184620004e7565b92915050565b611d0780620005256000396000f3fe608060405234801561001057600080fd5b506004361061012b5760003560e01c80639010d07c116100ad578063ca15c87311610071578063ca15c8731461031a578063d547741f1461034a578063df74e02814610366578063f2fde38b14610382578063f516440c1461039e5761012b565b80639010d07c1461026257806391d1485414610292578063a217fddf146102c2578063b5b68afe146102e0578063b6b55f25146102fe5761012b565b806336568abe116100f457806336568abe146101e4578063715018a614610200578063827a560b1461020a57806385f438c1146102265780638da5cb5b146102445761012b565b8062f714ce1461013057806301ffc9a71461014c578063144fa6d71461017c578063248a9ca3146101985780632f2ff15d146101c8575b600080fd5b61014a60048036038101906101459190611540565b6103bc565b005b610166600480360381019061016191906115d8565b6105a9565b6040516101739190611620565b60405180910390f35b61019660048036038101906101919190611679565b610623565b005b6101b260048036038101906101ad91906116dc565b61066f565b6040516101bf9190611718565b60405180910390f35b6101e260048036038101906101dd9190611733565b61068f565b005b6101fe60048036038101906101f99190611733565b6106b1565b005b61020861072c565b005b610224600480360381019061021f919061179f565b610740565b005b61022e610765565b60405161023b9190611718565b60405180910390f35b61024c610789565b60405161025991906117db565b60405180910390f35b61027c600480360381019061027791906117f6565b6107b2565b60405161028991906117db565b60405180910390f35b6102ac60048036038101906102a79190611733565b6107e1565b6040516102b99190611620565b60405180910390f35b6102ca61084c565b6040516102d79190611718565b60405180910390f35b6102e8610853565b6040516102f59190611620565b60405180910390f35b61031860048036038101906103139190611836565b610866565b005b610334600480360381019061032f91906116dc565b610975565b6040516103419190611872565b60405180910390f35b610364600480360381019061035f9190611733565b610999565b005b610380600480360381019061037b9190611836565b6109bb565b005b61039c6004803603810190610397919061188d565b6109cd565b005b6103a6610a53565b6040516103b39190611872565b60405180910390f35b6103c4610a59565b73ffffffffffffffffffffffffffffffffffffffff166103e2610789565b73ffffffffffffffffffffffffffffffffffffffff16148061043157506104307f10dac8c06a04bec0b551627dad28bc00d6516b0caacd1c7b345fcdb5211334e461042b610a59565b6107e1565b5b610470576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046790611917565b60405180910390fd5b600560009054906101000a900460ff166104bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b690611983565b60405180910390fd5b600454821115610504576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fb906119ef565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82846040518363ffffffff1660e01b8152600401610561929190611a0f565b6020604051808303816000875af1158015610580573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a49190611a4d565b505050565b60007f5a05180f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061061c575061061b82610a61565b5b9050919050565b61062b610adb565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060016000838152602001908152602001600020600101549050919050565b6106988261066f565b6106a181610b62565b6106ab8383610b76565b50505050565b6106b9610a59565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461071d576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107278282610bbc565b505050565b610734610adb565b61073e6000610c02565b565b610748610adb565b80600560006101000a81548160ff02191690831515021790555050565b7f10dac8c06a04bec0b551627dad28bc00d6516b0caacd1c7b345fcdb5211334e481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006107d98260026000868152602001908152602001600020610cc690919063ffffffff16565b905092915050565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b600560009054906101000a900460ff1681565b80600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016108c291906117db565b602060405180830381865afa1580156108df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109039190611a8f565b1015610944576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093b90611b08565b60405180910390fd5b610972600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16333084610ce0565b50565b600061099260026000848152602001908152602001600020610d62565b9050919050565b6109a28261066f565b6109ab81610b62565b6109b58383610bbc565b50505050565b6109c3610adb565b8060048190555050565b6109d5610adb565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a475760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a3e91906117db565b60405180910390fd5b610a5081610c02565b50565b60045481565b600033905090565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610ad45750610ad382610d77565b5b9050919050565b610ae3610a59565b73ffffffffffffffffffffffffffffffffffffffff16610b01610789565b73ffffffffffffffffffffffffffffffffffffffff1614610b6057610b24610a59565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610b5791906117db565b60405180910390fd5b565b610b7381610b6e610a59565b610de1565b50565b600080610b838484610e32565b90508015610bb257610bb08360026000878152602001908152602001600020610f2390919063ffffffff16565b505b8091505092915050565b600080610bc98484610f53565b90508015610bf857610bf6836002600087815260200190815260200160002061104690919063ffffffff16565b505b8091505092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000610cd58360000183611076565b60001c905092915050565b610d5c848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401610d1593929190611b28565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506110a1565b50505050565b6000610d7082600001611138565b9050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610deb82826107e1565b610e2e5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401610e25929190611b5f565b60405180910390fd5b5050565b6000610e3e83836107e1565b610f1857600180600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610eb5610a59565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610f1d565b600090505b92915050565b6000610f4b836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611149565b905092915050565b6000610f5f83836107e1565b1561103b5760006001600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610fd8610a59565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611040565b600090505b92915050565b600061106e836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6111b9565b905092915050565b600082600001828154811061108e5761108d611b88565b5b9060005260206000200154905092915050565b60006110cc828473ffffffffffffffffffffffffffffffffffffffff166112cd90919063ffffffff16565b905060008151141580156110f15750808060200190518101906110ef9190611a4d565b155b1561113357826040517f5274afe700000000000000000000000000000000000000000000000000000000815260040161112a91906117db565b60405180910390fd5b505050565b600081600001805490509050919050565b600061115583836112e3565b6111ae5782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506111b3565b600090505b92915050565b600080836001016000848152602001908152602001600020549050600081146112c15760006001826111eb9190611be6565b90506000600186600001805490506112039190611be6565b905080821461127257600086600001828154811061122457611223611b88565b5b906000526020600020015490508087600001848154811061124857611247611b88565b5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b8560000180548061128657611285611c1a565b5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506112c7565b60009150505b92915050565b60606112db83836000611306565b905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b60608147101561134d57306040517fcd78605900000000000000000000000000000000000000000000000000000000815260040161134491906117db565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1684866040516113769190611cba565b60006040518083038185875af1925050503d80600081146113b3576040519150601f19603f3d011682016040523d82523d6000602084013e6113b8565b606091505b50915091506113c88683836113d3565b925050509392505050565b6060826113e8576113e382611462565b61145a565b60008251148015611410575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561145257836040517f9996b31500000000000000000000000000000000000000000000000000000000815260040161144991906117db565b60405180910390fd5b81905061145b565b5b9392505050565b6000815111156114755780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080fd5b6000819050919050565b6114bf816114ac565b81146114ca57600080fd5b50565b6000813590506114dc816114b6565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061150d826114e2565b9050919050565b61151d81611502565b811461152857600080fd5b50565b60008135905061153a81611514565b92915050565b60008060408385031215611557576115566114a7565b5b6000611565858286016114cd565b92505060206115768582860161152b565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6115b581611580565b81146115c057600080fd5b50565b6000813590506115d2816115ac565b92915050565b6000602082840312156115ee576115ed6114a7565b5b60006115fc848285016115c3565b91505092915050565b60008115159050919050565b61161a81611605565b82525050565b60006020820190506116356000830184611611565b92915050565b600061164682611502565b9050919050565b6116568161163b565b811461166157600080fd5b50565b6000813590506116738161164d565b92915050565b60006020828403121561168f5761168e6114a7565b5b600061169d84828501611664565b91505092915050565b6000819050919050565b6116b9816116a6565b81146116c457600080fd5b50565b6000813590506116d6816116b0565b92915050565b6000602082840312156116f2576116f16114a7565b5b6000611700848285016116c7565b91505092915050565b611712816116a6565b82525050565b600060208201905061172d6000830184611709565b92915050565b6000806040838503121561174a576117496114a7565b5b6000611758858286016116c7565b92505060206117698582860161152b565b9150509250929050565b61177c81611605565b811461178757600080fd5b50565b60008135905061179981611773565b92915050565b6000602082840312156117b5576117b46114a7565b5b60006117c38482850161178a565b91505092915050565b6117d581611502565b82525050565b60006020820190506117f060008301846117cc565b92915050565b6000806040838503121561180d5761180c6114a7565b5b600061181b858286016116c7565b925050602061182c858286016114cd565b9150509250929050565b60006020828403121561184c5761184b6114a7565b5b600061185a848285016114cd565b91505092915050565b61186c816114ac565b82525050565b60006020820190506118876000830184611863565b92915050565b6000602082840312156118a3576118a26114a7565b5b60006118b18482850161152b565b91505092915050565b600082825260208201905092915050565b7f43616c6c6572206973206e6f7420612077697468647261776572000000000000600082015250565b6000611901601a836118ba565b915061190c826118cb565b602082019050919050565b60006020820190508181036000830152611930816118f4565b9050919050565b7f5769746864726177206973206e6f7420617661696c61626c6500000000000000600082015250565b600061196d6019836118ba565b915061197882611937565b602082019050919050565b6000602082019050818103600083015261199c81611960565b9050919050565b7f457863656564206d6178696d756d20616d6f756e740000000000000000000000600082015250565b60006119d96015836118ba565b91506119e4826119a3565b602082019050919050565b60006020820190508181036000830152611a08816119cc565b9050919050565b6000604082019050611a2460008301856117cc565b611a316020830184611863565b9392505050565b600081519050611a4781611773565b92915050565b600060208284031215611a6357611a626114a7565b5b6000611a7184828501611a38565b91505092915050565b600081519050611a89816114b6565b92915050565b600060208284031215611aa557611aa46114a7565b5b6000611ab384828501611a7a565b91505092915050565b7f496e73756666696369656e74206163636f756e742062616c616e636500000000600082015250565b6000611af2601c836118ba565b9150611afd82611abc565b602082019050919050565b60006020820190508181036000830152611b2181611ae5565b9050919050565b6000606082019050611b3d60008301866117cc565b611b4a60208301856117cc565b611b576040830184611863565b949350505050565b6000604082019050611b7460008301856117cc565b611b816020830184611709565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611bf1826114ac565b9150611bfc836114ac565b9250828203905081811115611c1457611c13611bb7565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081519050919050565b600081905092915050565b60005b83811015611c7d578082015181840152602081019050611c62565b60008484015250505050565b6000611c9482611c49565b611c9e8185611c54565b9350611cae818560208601611c5f565b80840191505092915050565b6000611cc68284611c89565b91508190509291505056fea26469706673582212206a8b865cefebc92080dd9aff9d1d514d8d6216b85ecd394a5540ab1deaacde5764736f6c63430008180033";

type VaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vault__factory extends ContractFactory {
  constructor(...args: VaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      Vault & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Vault__factory {
    return super.connect(runner) as Vault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultInterface {
    return new Interface(_abi) as VaultInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Vault {
    return new Contract(address, _abi, runner) as unknown as Vault;
  }
}
