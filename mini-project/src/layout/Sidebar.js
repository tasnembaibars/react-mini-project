import React from 'react'
import './Sidebar.css';
const Sidebar = () => {

  
      

    // end snippet
  return (
    <div>
     
     <div class="wrapper d-flex">
	<div class="sidebar">
		<small class="text-muted pl-3">WIDR PAY</small>
		<ul>
			<li><a href="#"><i class="fas fa-home"></i>Dashboard</a></li>
			<li><a href="#"><i class="far fa-credit-card"></i>Payment Page <img src="https://img.icons8.com/material-outlined/24/000000/new.png"/></a></li>
			<li><a href="#"><i class="fas fa-file-invoice"></i>Invoices <img src="https://img.icons8.com/material-outlined/24/000000/2.png"/></a></li>
		</ul>
		<small class="text-muted px-3">PRODUCTIVITY TOOLS</small>
		<ul>
			<li><a href="#"><i class="far fa-calendar-alt"></i>Online Scheduler</a></li>
			<li><a href="#"><i class="fas fa-video"></i>Video Meeting</a></li>
			<li><a href="#"><i class="fas fa-id-badge"></i>Public Profile</a></li>
		</ul>
		<small class="text-muted px-3">GROW YOUR CLIENT BASE</small>
		<ul>
			<li><a href="#"><i class="fas fa-external-link-alt"></i>Share</a></li>
			<li><a href="#"><i class="fas fa-code"></i>Add to Website</a></li>
		</ul>
	</div>
</div>
    </div>
  )
}

export default Sidebar
