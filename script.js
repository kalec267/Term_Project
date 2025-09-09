const wrapperBox = document.getElementById("wrapper");
const inputFieldGroup = document.getElementsByClassName("inputGroup");
const allInputs = document.querySelector("input");
const userNickname = document.getElementById("nickname");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("userPassword");
const confirmPassword = document.getElementById("confirmPassword");
const userPhone = document.getElementById("phone");
const registrationForm = document.getElementById("registrationForm");

const updateHelperText = (input, message, isValid) => {
    // input 태그의 부모 태그에 접근 하는 것
    // 예시로 input 태그를 userEmail로 접근했다고 하면 아래 태그들의 최상위 태그를 의미
    const inputGroup = input.parentElement;

    const helperText = inputGroup.getElementsByClassName("helperText")[0];

    if (isValid == true) {
        // isValid에는 bllean 데이터 true/false가 들어가게끔 만든다
        inputGroup.classList.remove('invalid');
        inputGroup.classList.add('valid');
        helperText.style.visibility = "hidden";
    }

    if (isValid == false) {
        inputGroup.classList.remove('valid');
        inputGroup.classList.add('invalid');
        helperText.style.visibility = "visible";
        helperText.innerText = message;
    }
}

// 입력 필드가 비어있는지 확인하는 함수
const checkEmptyInput = (input) => {
    if (input.value.trim() === '') {
        // 입력 칸에 입력한 문자열 중 띄어스기를 없애는 기능
        updateHelperText(input, '값을 입력해주세요', false);
        return false;
    }
    else {
        // 입력이 있으면 도움말을 지움
        updateHelperText(input, "", true);
        return true;
    }
}

// 이메일 형식이 올바른지 확인하는 함수
// 이메일 주소가 규격에 맞게 작성 되었는지 확인하는 것
const validateEmail = (input) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(input.value.trim()) == true) {
        updateHelperText(input, "", true);
        return true;
    }
    else {
        updateHelperText(input, "유효한 이메일 주소를 입력하세요.", false)
        return false;
    }
}

// 비밀번호 강도 설정
const checkPasswordStrength = (password) => {
    const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (strongPattern.test(password.value) == true) {
        updateHelperText(password, "비밀번호 강도:강함", true)
        return true;
    }
    else {
        updateHelperText(password, "비밀번호는 8자 이상, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.", false);
        return false;
    }
}

// 비밀번호와 비밀번호 확인이 일치하는지 확인하는 함수
const validatePasswordMatch = (passwordInput, confirmInput) => {
    if (passwordInput.value !== confirmInput.value) {
        updateHelperText(confirmInput, "비밀번호가 일치하지 않습니다.", false);
        return false;
    }
    else {
        updateHelperText(confirmInput, "", true);
        return true;
    }
}

// 전화번호가 올바른 형식인지 확인하는 함수
const validatePhoneNumber = (input) => {
    const phonePattern = /^(010|01[1-9])-\d{3,4}-\d{4}$/;
    if (phonePattern.test(input.value.trim())) {
        updateHelperText(input, "", true);
        return true;
    }
    else {
        updateHelperText(input, "유효한 전화번호를 입력하세요. (예: 010-1234-5678)", false);
        return false;
    }
}

// 폼 제출 시 (회원가입 커튼 클릭 시 회원가입이 진행되게) 입력 필드가 유효한지 확인하는 함수
const validateForm = () => {
    // boolean 값으로 에러 검사 시 문제가 없으면 true를 값으로, 
    // 문제가 있으면 false를 값으로 반환한다
    const isNicknameValid = checkEmptyInput(userNickname);
    const isEmailValid = validateEmail(userEmail);
    const isPasswordStrong = checkPasswordStrength(userPassword);
    const isPasswordMatch = validatePasswordMatch(userPassword, confirmPassword);
    const isPhoneValid = validatePhoneNumber(userPhone);

    // 모든 유효성 검사 결과가 true인지 확인
    return isNicknameValid &&
        isEmailValid &&
        isPasswordStrong &&
        isPasswordMatch &&
        isPhoneValid;

} //모든 조건들 boolean 값을 가지고 있고 전부 true일 때만 회원가입이 진행되게끔 한다(true 값 반환)

registrationForm.addEventListener('submit', (e) => {
    // 폼 안의 submit 타입의 버튼을 눌렀을 때 이벤트가 발생
    e.preventDefault();
    if (validateForm() == true) {
        console.log("모든 필드가 유효합니다. 회원가입을 진행합니다.");
    }
    else {
        console.log("위 필드 중 에러가 발생 했습니다. 회원가입을 진행할 수 없습니다.");
    }
})

// 각 input 태그를 널렀을 때 테두리 색이나 알림을 출력
document.querySelectorAll("input").forEach(input => {
    // forEach는 배열인 데이터를 각각 뽑아오고 싶을 때 사용
    input.addEventListener('input', () => {
        switch (input.id) {
            case 'nickname':
                checkEmptyInput(input);
                break;
            case 'email':
                validateEmail(input)
                break;
            case 'userPassword':
                checkPasswordStrength(input);
                break;
            case 'confirnPassword':
                validatePasswordMatch(userPassword, confirmPassword);
                break;
            case 'phone':
                validatePhoneNumber(input);
                break;
        }
    })
})