import React, {useContext} from "react";

const ThemeContext = React.createContext('light'); //생성할 컨텍스트의 기본 매개변수를 'light'로 설정

function ContextHook() { // 컨텍스트의 제공자. props 매개변수를 'lavender'로 변경 ToolBar 컴포넌트에 전달
    return (
        <ThemeContext.Provider value='lavender'>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar() { // props value 변경없이 ThemeButton 컴포넌트에 전달
    return (
        <div>
            <ThemeButton />
        </div>
    )
}

function ThemeButton() { // props value 변경없이 Button 컴포넌트에 전달
    return (
        <div>
            <Button />
        </div>
    )
}

function Button() {
    const value = useContext(ThemeContext); //컨텍스트 구독 요청. Provider의 'lavender' 매개변수를 가져옴
    return (
        <div
            style={{
                margin:50,
                padding: 50,
                backgroundColor: value,
            }}>
                <p>예제3. 컨텍스트를 가지고 데이터를 전달하는 예</p>
                <button>확인</button>
        </div>
    )
}

export default ContextHook;
