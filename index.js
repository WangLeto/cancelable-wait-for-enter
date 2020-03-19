module.exports = () => {
  return new Promise((resolve, reject) => {
    const wasAlreadyRaw = process.stdin.isRaw

    if (!wasAlreadyRaw) {
      process.stdin.setRawMode(true)
      process.stdin.resume()
    }

    const onData = data => {
      const isCancel = data.readInt8() === 3
      if (data.toString() === '\r' || isCancel) {
        if (!wasAlreadyRaw) {
          process.stdin.setRawMode(false)
          process.stdin.pause()
        }

        process.stdin.removeListener('data', onData)
        if (isCancel) {
          return reject(new Error('canceled'))
        }
        resolve()
      }
    }

    process.stdin.on('data', onData)
  })
}
