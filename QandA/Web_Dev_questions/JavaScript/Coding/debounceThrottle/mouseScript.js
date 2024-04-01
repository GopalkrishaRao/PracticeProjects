const defaultMouse = document.getElementById("mouseDefault")
const debounceMouse = document.getElementById("mouseDebounce")
const throttleMouse = document.getElementById("mouseThrotle")

const updateDebounceMouse = debounce(() => {
  incrementCount(debounceMouse)
})
const updateThrottleMouse = throttle(() => {
  incrementCount(throttleMouse)
}, 100)

function debounce(cb, delay = 1000) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

function throttle(cb, delay = 1000) {
  let shouldWait = false
  let waitingArgs
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true

    setTimeout(timeoutFunc, delay)
  }
}

document.addEventListener("mousemove", e => {
  incrementCount(defaultMouse)
  updateDebounceMouse()
  updateThrottleMouse()
})



function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1
}