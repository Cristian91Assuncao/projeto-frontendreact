import React from 'react'
import { SectionStyle } from './FiltersStyle'

export default function Filters({
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
  limparFiltros
})
{
  const minFilterChange = (event) => {
    const value = (event.target.value); // Impede valores negativos
    setMinFilter(value);
  };

  const maxFilterChange = (event) => {
    const value = (event.target.value); // Impede valores negativos
    setMaxFilter(value)
  };

  const searchFilterChange = (event) => {
    setSearchFilter(event.target.value);
  };
  console.log(searchFilter);
  return (
    <SectionStyle>
      <h2>Filters</h2>
      <div>
      <p>Valor mínimo:</p>
      <input type="number" value={minFilter} min="0" onChange={minFilterChange} />      
      </div>

      <div>
      <p>Valor máximo:</p>
      <input type="number" value={maxFilter} min="0" onChange={maxFilterChange} />      
      </div>

      <div>
      <p>Busca por nome:</p>
      <input type="text" value={searchFilter} onChange={searchFilterChange} />      
      </div>
      <button onClick={limparFiltros}>Limpar Filtros</button>
    </SectionStyle>

  )
}
