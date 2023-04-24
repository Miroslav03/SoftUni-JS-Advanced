function editElement(ref,old,replace) {
    const text = ref.textContent

    const newText  = text.split(old).join(replace)

    ref.textContent = newText
    
}