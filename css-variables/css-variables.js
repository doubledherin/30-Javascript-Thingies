const inputs = document.querySelectorAll('.variables input')

function handleChanges() {
    const units = this.dataset.units || ''
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value + units}`)
}

inputs.forEach(input => input.addEventListener('change', handleChanges))
inputs.forEach(input => input.addEventListener('mousemove', handleChanges))
