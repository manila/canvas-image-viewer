class ImageViewer {
	constructor(canvasElement, imageSource) {
		this.canvas = canvasElement;
		this.context = canvasElement.getContext("2d");
		this.image = new Image();
		this.image.src = imageSource;
		this.image.onload = () => this.draw();
		this.zoom = 0;
		this.position = [0, 0];
	}

	draw() {
		this.context.drawImage(
			this.image, 
			-(this.image.width / 2) + (this.canvas.width / 2),
			-(this.image.height / 2) + (this.canvas.height /2)
		);
	}
}
