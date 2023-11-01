import React, { useEffect } from 'react'
import './Dashboard.css'
export default function Dasboard() {
    const sideMenu = document.querySelector("aside")
const menu_btn = document.getElementById('menu_btn')
const close_btn = document.getElementById('close_btn')
const theme_toggler = document.querySelector('.theme_toggler')
const total_sales =document.getElementById("total_sales")
// show side menu
// menu_btn.addEventListener('click', ()=>{
// sideMenu.style.display = 'block'
// })
// // close side menu
// close_btn.addEventListener('click', ()=>{
//     sideMenu.style.display = 'none'
// })

// change theme
const temetoggle=()=>{


// theme_toggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables')

theme_toggler.querySelector('span:nth-child(1)').classList.toggle("active")
theme_toggler.querySelector('span:nth-child(2)').classList.toggle("active")

// })


}
// }, [])

  return (
<>

{/* We ail rend/er ehere dashobard */}
{/* <SideBar />
<MainDashobard /> */}
<div className="containerfluid">

<aside>
            <div class="top">
                <div class="logo">
                    <img src="logo.png" alt="" />

                    <h1 class="text_logo">Inventory</h1>
                </div>
                <div class="close" id="close_btn">

                    <span class="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            <div class="sidebar">
                <a href="./dashboard.html"  class="active">
                    <span class="material-icons-sharp">
                        grid_view
                    </span>
                    <h2>Dashboard</h2>
                </a>
                <a href="./stockIn.html">
                    <span class="material-icons-sharp">
                        inventory
                    </span>
                    <h2>Products</h2>
                   
                </a>
                <a href="./add_product.html">
                    <span class="material-icons-sharp">
                        add_shopping_cart
                    </span>
                    <h2>Add Products</h2>
                   
                </a>
                <a href="./stockout.html">
                    <span class="material-icons-sharp">
                        point_of_sale
                    </span>
                    <h2>Sales</h2>
                </a>
                <a href="./Settings (1).html">
                    <span class="material-icons-sharp">
                        settings
                    </span>
                    <h2>Settings</h2>
                </a>
                <a href="../index.html">
                    <span class="material-icons-sharp">
                        logout
                    </span>
                    <h2>LogOut</h2>
                </a>
              

            </div>
        </aside>

<main>
            <h1>Dashboard</h1>
          
            <div class="insights">
                <div class="sales">
                    <span class="material-icons-sharp">
                        bubble_chart
                    </span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Sales</h3>
                            <h1 id='total_sales'></h1>
                        </div>
                        {/* <!-- <div class="progress">
                            <svg>
                                <circle cx="38" r="35" cy="38">
                                </circle>
                            </svg>
                            <div class="number">
                                <p>90%</p>
                            </div>
                        </div> --> */}
                    </div>
                    <small>last 24 hours</small>
                </div>
                {/* <!--        END OF SALES --> */}

                <div class="expense">
                    <span class="material-icons-sharp">
                        bar_chart
                    </span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Expense</h3>
                            <h1 id="total_expense"></h1>
                        </div>
                        {/* <!-- <div class="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36" class="circle">
                                </circle>
                            </svg>
                            <div class="number">
                                <p>70%</p>
                            </div>
                        </div> --> */}
                    </div>
                    <small>last 24 hours</small>
                </div>
                {/* <!--        END OF expense --> */}

                <div class="income">
                    <span class="material-icons-sharp">
                        show_chart
                    </span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Income</h3>
                            <h1 id="total_income"></h1>
                        </div>
                        {/* <!-- <div class="progress">
                            <svg>
                                <circle cx="38" r="35" cy="38">
                                </circle>
                            </svg>
                            <div class="number">
                                <p>75%</p>
                            </div>
                        </div> --> */}
                    </div>
                    <small>last 24 hours</small>
                </div>
                {/* <!--        END OF income --> */}
            </div>

            {/* <!-- RECENT ORDER --> */}
            <div class="recent_order">
                <h2 style={{margin: '45px 10px',    marginBottom: '10px'}}>Recent Order</h2>
                <table class="recent_order_table" id='recent_order_table'>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Product Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                </table>
                <a href="#">Show All</a>
            </div>


        </main>

        <div class="right">
    <div class="top">
        <button class="menu_btn" id="menu_btn">
            <span class="material-icons-sharp">
                menu
            </span>
        </button>
        <div class="theme_toggler">
            <span class="material-icons-sharp active" onClick={temetoggle} >
                light_mode
            </span>
            <span class="material-icons-sharp"  >
                dark_mode
            </span>
        </div>
        <div class="date">
<span id='today_date'>
33293-2
</span>
        </div>
    </div>
</div>




        </div>

</>

  )
}
