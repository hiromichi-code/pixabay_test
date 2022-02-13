import Masonry from "react-masonry-component";

export const ImageList = (props) => {
	const images = props.images.map((image) => {
		return (
			<a
				href={image.pageURL}
				key={image.id}
				target="_blank"
				rel="noopener noreferrer">
				<img src={image.webformatURL} alt={image.tags} className="w-48 m-1"></img>
			</a>
		);
	});
	return (
		<Masonry className="w-5/6 flex flex-wrap justify-center mt-16 mx-auto">
			{images}
		</Masonry>
	);
};
