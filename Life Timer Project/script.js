
const settingIcon = document.getElementById('icon')
let isOpen = false;
let dateOfBirth;
const content = document.getElementById('settingContent')

const initialText = document.getElementById('initial')
const afterDobBtn = document.getElementById('afterDobButton')

const dobButton = document.getElementById('button');
const dobInput = document.getElementById('dobInput')

const yearEl = document.getElementById('year')
const monthEl = document.getElementById('month')
const dayEl = document.getElementById('day')


const toggleDateOfBirth = () =>{
    
    if(isOpen){
        content.classList.add('unhide')
    }
    else{
        content.classList.add('unhide')
    }

    isOpen = !isOpen

    console.log('logToggle');
    
}


// const updateAge =() =>{

//     if(!dateOfBirth){
//         console.log('Please enter a valid date!');
//         return
        
//     }

//     const newDateBirth = new Date(dateOfBirth)

//     if(isNaN(newDateBirth)){
//         console.log('Invalid date format');
//         return;
        
//     }

//     const curDate = new Date()
//     console.log(`Current Date: ${curDate}`);

//     const dateDiff = curDate - newDateBirth
//     console.log(`Date Diff in milliseconds: ${dateDiff}`);

//     const yearDiff = Math.floor(dateDiff / (1000 * 60 *60 *24 *365))
//     const monthDiff = Math.floor(dateDiff / (1000 * 60 *60 *24 *365) %12)
//     const dayDiff = Math.floor(dateDiff / (1000 * 60 *60 *24 *365) %30)
    
//     yearEl.innerHTML = yearDiff
//     monthEl.innerHTML = monthDiff
//     dayEl.innerHTML = dayDiff

//     console.log(
//         yearDiff,
//         monthDiff, dayDiff
//     );
    
    
// }


const updateAge = () => {
    if (!dateOfBirth) {
        console.log('Please enter a valid date!');
        return;
    }

    const newDateBirth = new Date(dateOfBirth);

    if (isNaN(newDateBirth)) {
        console.log('Invalid date format');
        return;
    }

    const curDate = new Date();
    console.log(`Current Date: ${curDate}`);

    // Calculate years, months, and days accurately
    let years = curDate.getFullYear() - newDateBirth.getFullYear();
    let months = curDate.getMonth() - newDateBirth.getMonth();
    let days = curDate.getDate() - newDateBirth.getDate();

    // Adjust if the current day is before the birth day
    if (days < 0) {
        months--;
        // Get the days in the previous month to add to the day difference
        const prevMonth = new Date(curDate.getFullYear(), curDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    // Adjust if the current month is before the birth month
    if (months < 0) {
        years--;
        months += 12;
    }

    // Update elements with the calculated age
    yearEl.innerHTML = years;
    monthEl.innerHTML = months;
    dayEl.innerHTML = days;

    console.log(`Years: ${years}, Months: ${months}, Days: ${days}`);
};




const setDOB =() =>{
    dateOfBirth = dobInput.value;

    if(dateOfBirth){
        initialText.classList.add('hide')
        afterDobBtn.classList.remove('hide')
        updateAge()

    }else{
        afterDobBtn.classList.add('hide')
        initialText.classList.remove('hide')

    }

    //console.log(dateOfBirth);
    
}





setDOB()

settingIcon.addEventListener('click', toggleDateOfBirth)
dobButton.addEventListener('click', setDOB)
dobButton.addEventListener('click', updateAge)