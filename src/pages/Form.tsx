const Form = () => {
  const metadata: any = {
    fields: [
      {
        id: 'name',
        type: 'text',
        label: 'Name'
      },
      {
        id: 'age',
        type: 'number',
        label: 'Age'
      },
      {
        id: 'comment',
        type: 'textarea',
        label: 'Comment',
        disabled: true
      }
    ]
  }

  const data: any = {
    name: "Bob",
    age: 42,
    comment: "The best developer in the world"
  }

  return (
    <form>
      {Object.keys(data).map((key: any) => {
        const fieldMetadata = metadata.fields.filter((meta: any) => meta.id === key)[0];
        return (
          <div key={fieldMetadata.id}>
            <label className="form-label" htmlFor={fieldMetadata.id}>{fieldMetadata.label}</label>
            <input id={fieldMetadata.id} className="form-control" type={fieldMetadata.type}/>
          </div>
        )
      })}
    </form>
  )
}
export default Form;
