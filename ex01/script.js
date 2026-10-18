function calculateGrade(grade) {
    //Validate the input
    if (typeof grade !== "number" || !Number.isFinite(grade)){
        return "Invalide input";
    }
    
    if (grade <0 || grade> 100)
    {
        return "invalide input";
    }

    if (grade >= 90)
    {
        return "A";
    }else if(grade >=80)
    {
        return "B";
    }else if(grade >=70)
    {
        return "C";
    }else if(grade >=60)
    {
        return "D";
    }else 
    {
        return "F";
    }
}

function checkAccess(age, hasTicket){
    if (typeof age !== "number" || !Number.isFinite(age) || typeof hasTicket !== "boolean"){
        return false;
    }

    return age >=18 && hasTicket ===true;
}

console.log("=== Grade Tests ===");


console.log(calculateGrade(90));      
console.log(calculateGrade(89));  
console.log(calculateGrade(100));
console.log(calculateGrade(0));
console.log(calculateGrade(59));
console.log(calculateGrade(60));
console.log(calculateGrade(-1));
console.log(calculateGrade(101));
console.log(calculateGrade("100"));
console.log(calculateGrade("NaN"));
console.log(calculateGrade(Infinity));

console.log("=== Accessability Tests ===");

console.log(checkAccess(18, true));    
console.log(checkAccess(17, true));    
console.log(checkAccess(25, false));   
console.log(checkAccess(18, false));   
console.log(checkAccess(30, true));    
console.log(checkAccess(-1, true));    
console.log(checkAccess("20", true));  
console.log(checkAccess(20, "yes"));   
console.log(checkAccess(NaN, true));  