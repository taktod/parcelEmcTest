import {testFunc} from "./../emc/test.emc";

export var test = () => {
  console.log(Module[testFunc]());
}
