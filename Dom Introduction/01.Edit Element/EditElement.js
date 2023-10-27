function editElement(ref, old, replace) {

    const text = ref.textContent;
    const newtext = text.split(old).join(replace)
    ref.textContent = newtext
}