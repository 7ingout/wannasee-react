// import { createContext, useContext, useMemo, useState } from 'react';

// export const ResultContext = createContext(undefined); 
// // createContext 선언

// export function ResultContextProvider({ children }) {
// 	const [savedLoginId, setSavedLoginId] = useState(""); ////글로벌하게 관리할 state
// 	const [savedLoginPassword, setSavedLoginPassword] = useState("");
//     const value = useMemo(()=>({
// 		savedLoginId,
// 		setSavedLoginId,
//         savedLoginPassword,
//         setSavedLoginPassword
// 	}), [savedLoginId, setSavedLoginId, savedLoginPassword, setSavedLoginPassword]);
// 	return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>;
// }

// export function useResultContext() {
// 	return useContext(ResultContext);
// } //다른 컴포넌트에서 context를 사용할 때 쓰임. 

// import { createContext, useContext, useMemo, useState } from 'react';

// export const ResultContext = createContext(undefined); 
// // createContext 선언

// export function ResultContextProvider({ children }) {
// 	const [savedLoginId, setSavedLoginId] = useState(""); ////글로벌하게 관리할 state
// 	const [savedLoginPassword, setSavedLoginPassword] = useState("");
//     const value = useMemo(()=>({
// 		savedLoginId,
// 		setSavedLoginId,
//         savedLoginPassword,
//         setSavedLoginPassword
// 	}), [savedLoginId, setSavedLoginId, savedLoginPassword, setSavedLoginPassword]);
// 	return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>;
// }

// export function useResultContext() {
// 	return useContext(ResultContext);
// } //다른 컴포넌트에서 context를 사용할 때 쓰임. 