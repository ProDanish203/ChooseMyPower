import { Select } from "@radix-ui/themes";

interface Props{
  zip: string;
  setZip: (zip: string) => void;
  type: string;
  setType: (type: string) => void;
}

export const ZipCode = ({zip, setZip, type, setType} : Props) => {

  const handleSelectChange = (e:any) => {
    setType(e);
  }

  return (
    <div className='flex items-center max-md:flex-col max-md:justify-center gap-2 bg-secondary md:py-1 py-4 px-4 md:pr-1 relative rounded-md'>

    <input type="text" 
    className='bg-transparent max-md:w-full px-2 py-2.5 outline-none text-lg'
    placeholder="ZIP CODE"
    minLength={5}
    maxLength={5}
    value={zip}
    onChange={(e) => setZip(e.target.value)}
    />

    <div className="max-md:w-full">
    <Select.Root defaultValue={type} size="3" name="type"
    value={type}
    onValueChange={handleSelectChange}
    >
      <Select.Trigger variant="soft" color="indigo"/>
      <Select.Content position="item-aligned" color="indigo">
        <Select.Item value="commercial">Commercial</Select.Item>
        <Select.Item value="residential">Residential</Select.Item>
      </Select.Content>
    </Select.Root>
    </div>

    <div className="max-md:w-full">
      <button className="bg-primary max-md:w-full text-bg py-3 px-5 rounded-md  ">
        <i className="fas fa-magnifying-glass text-xl"></i>
      </button>
    </div>

    </div>
  )
}
