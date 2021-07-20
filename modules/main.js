
import * as home from './views/Home.js'
import * as profile from './views/Profile.js'
import * as work from './views/Work.js'
import * as setting from './views/Setting.js'




const route = async () => {
  const path = location.pathname
  let dest = home
  if (path === '/profile') {
    dest = profile
  }
  else if (path === '/home') {
    dest = home
  }
  else if (path === '/work') {
    dest = work
  }
  else if (path === '/setting') {
    dest = setting
  }

  document.querySelector('.view').innerHtml = await dest.getHtml()

}

const test = () => {
  console.log("h")
}

window.addEventListener("popstate", (e)=>{
  e.preventDefault()
  console.log("here")
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.link').forEach((node) => {
    node.addEventListener('click', (e) => {
      e.preventDefault()
      history.pushState(null, null, e.target.href)
      route()
    })
  })
  route()
});
