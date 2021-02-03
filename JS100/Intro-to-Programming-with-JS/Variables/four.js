const NAME = 'Victor';
console.log('Good Morning, ' + NAME); // Good Morning, Victor
console.log('Good Afternoon, ' + NAME); // Good Afternoon, Victor
console.log('Good Evening, ' + NAME); // Good Evening, Victor

NAME = 'Joe'; // error
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/* This code throws an error during the reassignment of the NAME variable
because it's a constant. */