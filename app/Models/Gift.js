
export class Gift {

    constructor(data) {
        this.id = data.id || ''
        this.tag = data.tag
        this.url = data.url || "https://images.unsplash.com/photo-1577217534079-41d6bb68ac50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNocmlzdG1hcyUyMHByZXNlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
        this.opened = data.opened || false
    }

    get GifsTemplate() {
        if (!this.opened) {
            return `
            <div class="col-4"  onclick="app.giftsController.openGift('${this.id}')">
              <div class="card my-2 selectable">
                <img src="${this.url}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">${this.tag}</p>
                </div>
              </div>
            </div>
            `
        } else {
            return `
            <div class="col-4">
              <div class="card my-2">
                <img src="${this.url}" class="card-img-top" alt="${this.tag}">
                <div class="card-body">
                  <p class="card-text">${this.tag}</p>
                </div>
              </div>
            </div>
            `
        }
    }
}
