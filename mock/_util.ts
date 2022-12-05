export function resultSuccess(data, message = 'success') {
  return {
    code: 200,
    data,
    message,
    type: 'success',
  }
}
