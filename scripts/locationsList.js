import { getLocations } from './database.js'

export const locationsList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationsList">'

    // Create HTNL representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location_card">
            <div class="location__street">${location.street}</div>
            <div class="location__city)">${location.city}</div>
            <div class="location__state">${location.state}</div>
        </section>`
    }
    htmlString += `</article>`

    console.log(htmlString)

    return htmlString
}
