var navlist = document.getElementById('navitems');
function openmenu() {
    navlist.style.left = '0';
}
function closemenu() {
    navlist.style.left = '-200px';
}
document.querySelector("#menuopen").addEventListener("click", openmenu);

/* ----- keeps the links active ------*/

document.addEventListener('DOMContentLoaded', function () {
    
    var currentUrl = window.location.href.split('#')[0];
    var navLinks = document.querySelectorAll('.nav-links');

    navLinks.forEach(function (link) {

        var linkUrl = link.href.split('#')[0];

        if (linkUrl === currentUrl) {
            link.classList.add('active');
        }
    });
});

/* -------- move to top or bottom accordingly -------- */

document.addEventListener('DOMContentLoaded', function () {
    
    var backToTopLink = document.getElementById('backtotop');

    window.addEventListener('scroll', function () {
        if (this.oldScroll > this.scrollY) {
            backToTopLink.href = '#top'; 
            backToTopLink.querySelector('i').className = 'fa fa-arrow-up';
        } else {
            backToTopLink.href = '#bottom'; 
            backToTopLink.querySelector('i').className = 'fa fa-arrow-down';    
        }

        this.oldScroll = this.scrollY;
    });
});

/* ------ contact from --------- */

function validateForm() {
    var name = document.getElementById('username');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');

    if (name.value.trim() === '' || phone.value.trim() === '' || message.value.trim() === '') {
        showError('All fields are required.');
        return false;
    }

    var phoneNoPattern = /^\d{10}$/;
    if (!phoneNoPattern.test(phone.value)) {
        showError('Please enter a valid phone number');
        return false;
    }

    return true;
}

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://isirkjnueczlwkifryxf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(https://isirkjnueczlwkifryxf.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzaXJram51ZWN6bHdraWZyeXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NjQyNzMsImV4cCI6MjAyNzE0MDI3M30.0mIAi5fU_bT2fIV34W1fdEgy-Ko5tyeuG8mNV3TpZz8)


