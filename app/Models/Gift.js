
export class Gift {

    constructor(data) {
        this.tag = data.tag
        this.url = data.url
    }

    get GifsTemplate() {
        return `
        <div class="col-3">
          <div class="card my-2">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text</p>
            </div>
          </div>
        </div>
        `
    }
}
