export function verifyInputs(objForVerify) {
  return Object.values(objForVerify).every((value) => value);
}
