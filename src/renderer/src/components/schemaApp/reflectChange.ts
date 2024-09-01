export let reflectChange: () => void = () => {
  return
}

export function setReflectChange(reflector: () => void): void {
  reflectChange = reflector
}
