function passwordStrength(Password)
{
    let strength = ''
    if(/(?=.*[A-Z])(?=.*[a-z])(?=.*[\@,\!,-,_,\%,\#,\^,\*,\+,\-])(?=.*\d).{8,}/.test(Password))
    {
        strength = 'strong'
    }
    else if(/(?=.*[A-Z])(?=.*[a-z])(?=.*[\@,\!,-,_,\%,\#,\^,\*,\+,\-]|\d).{6,}/.test(Password))
    {
        strength = 'medium '
    }
    else
    {
        strength = 'weak '
    }

    return strength
}

console.log(passwordStrength('word'))
console.log(passwordStrength('Password'))
console.log(passwordStrength('@Password'))
console.log(passwordStrength('@Password4'))