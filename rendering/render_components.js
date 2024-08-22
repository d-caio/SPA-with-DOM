export default function renderComponents(...componentFamilies) {
    componentFamilies.forEach(family => {
        const parent = family[0], children = family[1], sibling = family[2], hierarchy = family[3]

        if (!sibling || !hierarchy) children.forEach(child => parent.appendChild(child))
        else children.forEach(child => sibling.insertAdjacentElement(hierarchy, child))
    })
}