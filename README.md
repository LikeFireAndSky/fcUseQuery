## 리엑트 쿼리를 연습해보자

먼저 깔아야 할 것들
```node
//타입스크립트 기반 CRA 생성하기
npx create-react-app@latest my-app --template typescript

//React-Query 깔기
npm install @tanstack/react-query

//Tailwindcss 깔기
npm install -D tailwindcss

//Tailwindcss config.js 파일 만들기
npx tailwindcss init

//Material-tailwind 깔기
npm install @material-tailwind/react
```

## 사용 방법
```javascript
import {useQuery} from '@tanstack/react-query'

const queryKey: [string, string | number] = [key, `${params}`];
	const Option = {
		cacheTime: 1000 * 60 * cache,
		staleTime: 1000 * 60 * stale,
	};

	const { data, isLoading, error } = useQuery(
		queryKey,
		() => fn(params as string),
		Option,
	);
```

정말 간단하게 data는 데이터고 isLoading은 로딩중, error는 에러요소이다.

fn은 사용할 fetch 또는 axios 함수를 넣으면 된다.

의존성 배열을 사용하기 위해

익명함수를 사용해서 parameter을 전달해 주어야 한다.


