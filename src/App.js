import { SearchBar } from "./components/SearchBar";
import axios from "axios";
import { useState } from "react";
import { ImageList } from "./components/ImageList";

export default function App() {
	const [images, setImages] = useState([]);

	const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY;

	const onSearchSubmit = async (term) => {
		try {
			const params = {
				key: ApiKey,
				q: term,
			};
			const response = await axios.get("https://pixabay.com/api/", { params });
			setImages(response.data.hits);
			if (response.data.total === 0) {
				console.log("画像がありません");
			}
		} catch {
			window.alert("画像の取得に失敗しました");
		}
	};
	
	return (
		<div className="mt-24">
			<SearchBar onSubmit={onSearchSubmit} />
			<ImageList images={images} />
		</div>
	);
}
