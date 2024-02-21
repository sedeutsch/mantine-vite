import { useState } from 'react';
import { Combobox, Input, InputBase, Loader, useCombobox } from '@mantine/core';
import classes from './SelectAsync.module.css';

const MOCKDATA = [
  'Abilene Christian University',
  'Academy of Art College',
  'Adams State College',
  'Adelphi University',
  'Adler School of Professional Psychology',
  'Adrian College',
  'Agnes Scott College',
  'Air Force Institute of Technology',
  'Alabama Agricultural and Mechanical University',
  'Alabama State University',
  'Alaska Bible College',
  'Alaska Pacific University',
  'Albany College of Pharmacy',
  'Albany Law School',
  'Albany Medical Center',
  'Albany State University',
  'Albertus Magnus College',
  'Albion College',
  'Albright College',
  'Alcorn State University',
  'Alderson Broaddus College',
  'Alfred Adler Graduate School',
  'Alfred University',
  'Alice Lloyd College',
  'Allegheny College',
  'Allen University',
  'Alma College',
  'Alvernia College',
  'Alverno College',
  'Ambassador University',
  'Amber University',
  'American Academy of Nutrition',
  'American Business & Technology University',
  'American Conservatory of Music',
  'American Conservatory Theater',
  'American-European School of Management',
  'American Film Institute Center for Advanced Film and Television Studies',
  'American Indian College',
  'American InterContinental University - Atlanta',
  'American InterContinental University - Ft. Lauderdale',
  'American InterContinental University - Georgia',
  'American InterContinental University Online',
  'American International College',
  'American Jewish University',
  'American Military University',
  'American Public University',
  'American University',
  'American World University',
  'Amherst College',
  'Anderson College',
  'Anderson University',
  'Andon College - Modesto',
  'Andon College - Stockton',
  'Andrew Jackson University',
  'Andrews University',
  'Angelo State University',
  'Anna Maria College',
  'Antioch New England Graduate School',
  'Antioch University',
  'Antioch University Los Angeles',
  'Antioch University Santa Barbara',
  'Antioch University Seattle',
  'Appalachian Bible College',
  'Appalachian State University',
  'Aquinas College',
  'Arcadia University',
  'Argosy University',
  'Argosy University - Hawaii',
  'Arizona Christian University',
  'Arizona State University',
  '"Arizona State University, Downtown Phoenix Campus"',
  '"Arizona State University, Polytechnic Campus"',
  '"Arizona State University, Tempe Campus"',
  '"Arizona State University, West Campus"',
  'Arkansas State University',
  '"Arkansas State University, Beebe"',
  '"Arkansas State University, Mountain Home"',
  '"Arkansas State University, Newport"',
  'Arkansas Tech University',
  'Arlington Baptist College',
  'Armstrong Atlantic State University',
  'Armstrong University',
  'Art Academy of Cincinnati',
  'Art Center College of Design',
  'Arthur D. Little Management Education Institute',
  'Art Institute of Charlotte',
  'Art Institute of Southern California',
  'Asbury College',
  'Ashland University',
  'Assumption College',
  'Athenaeum of Ohio',
  'Athens State College',
  'Atlanta Christian College',
  'Atlanta College of Art',
  'Atlantic International University',
  'Atlantic Union College',
  'Atlantic University',
  'Auburn University',
  'Auburn University at Montgomery',
  'Audrey Cohen College',
  'Augsburg College',
  'Augustana College',
  'Augustana College',
  'Augusta State University',
  'Aurora University',
  'Austin College',
  'Austin Community College',
  'Austin Peay State University',
  'Ave Maria University',
  'Averett College',
  'Avila College',
  'Azusa Pacific University',
];

function getAsyncData() {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => resolve(MOCKDATA), 2000);
  });
}

export function SelectAsync() {
  const [value, setValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => {
      if (data.length === 0 && !loading) {
        setLoading(true);
        getAsyncData().then((response) => {
          setData(response);
          setLoading(false);
          combobox.resetSelectedOption();
        });
      }
    },
  });

  const options = data.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      classNames={classes}
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={loading ? <Loader size={18} /> : <Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {loading ? <Combobox.Empty>Loading....</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
