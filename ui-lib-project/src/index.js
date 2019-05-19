import Dropdown from './ninja-ui/dropdown'
import ToolTip from './ninja-ui/tooltip'
import Tabs from './ninja-ui/tabs'
import Snackbar from './ninja-ui/snackbar'
// create tooltip


const tooltip=new ToolTip(document.querySelector(".tooltip"))

tooltip.init()
// drop downs
const dropdowns=document.querySelectorAll(".dropdown")

dropdowns.forEach(dropdown=>{
  const instance=new Dropdown(dropdown)
  instance.init()
})

const tabs=new Tabs(document.querySelector(".tabs"))
tabs.init()
const snackbar= new Snackbar()
snackbar.init()
const button = document.querySelector(".snackbar-trigger")
button.addEventListener("click",()=>{
  snackbar.show("You clicked me :)")
})