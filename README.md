# rawish-census-data
Some data and munging from the 2010 US census

## Source data uris

* `fips-county-codes.csv` - http://www2.census.gov/geo/docs/reference/codes/files/national_county.txt
* `population-stats-by-county` - http://api.census.gov/data/2010/sf1?get=PCT012A001,PCT012A002,PCT012B001,PCT012B002,PCT012C001,PCT012C002,PCT012D001,PCT012D002,PCT012E001,PCT012E002,PCT012F001,PCT012F002,PCT012G001,PCT012G002,PCT012H001,PCT012H002,PCT012I001,PCT012I002,PCT012J001,PCT012J002,PCT012K001,PCT012K002&for=county:*

## Metrics

| Metric Name | Metric Description |
| ----------- | ------------------ |
| `PCT012*001` |	People who are * |
| `PCT012*002` |	Male: People who are * |
| `PCT012A001` |	People who are White alone |
| `PCT012B001` |	People who are Black or African American alone |
| `PCT012C001` |	People who are American Indian and Alaska Native alone |
| `PCT012D001` |	People who are Asian alone |
| `PCT012E001` |	People who are Native Hawaiian and Other Pacific Islander alone |
| `PCT012F001` |	People who are Some Other Race alone |
| `PCT012G001` |	People who are Two or More Races |
| `PCT012H001` |	People who are Hispanic or Latino |
| `PCT012I001` |	People who are White alone, not Hispanic or Latino |
| `PCT012J001` |	People who are Black or African American alone, not Hispanic or Latino |
| `PCT012K001` |	People who are American Indian and Alaska Native alone, not Hispanic or Latino |
