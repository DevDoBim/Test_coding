module.exports = {
  // # 입력한 이메일 주소에는 "@" 문자가 1개만 존재해야 이메일 형식이다.
  // # 입력한 이메일 주소에 공백(스페이스)이 존재하면 이메일 형식이 아니다.
  // # 입력한 이메일 주소 맨 앞에 하이픈(-)이 있으면 이메일 형식이 아니다.
  isEmail: (value) => {
    // || : 왼쪽이 값이 있을 때는 value 반환, 없을 때는 오른쪽 값 반환
    // # value 값이 없을 때 오류 대비
    const email = value || '';

    // # .split('') ''을 기준으로 문자열을 나눈다.
    // "test@email.com" => @ => ["test", "gmail.com"]
    if (email.split('@').length !== 2) {
        // email을 split한 값이 2가 아니면 @없거나 @2개 이상
        return false;
    } else if(email.includes(' ')){
        // email 안에 공백이 존재
        return false;
    } else if(email[0] === '-'){
        // email의 첫 문자열이 - 일때
        return false;
    }
    return true;

  },
};
