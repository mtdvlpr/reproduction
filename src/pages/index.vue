<template>
  <div>
    PDF is wrongly formatted.
  </div>
</template>
<script setup lang="ts">

const headers: {title: string, key: keyof typeof data[0]}[] = [
  {title: 'Name', key: 'name'},
  {title: 'Type', key: 'type'},
  {title: 'Value', key: 'value'},
  {title: 'NR.', key: 'nr'}
]

const data = [
  {name: 'Name 1', type: 'Type 1', value: 'Value 1', nr: 'NR. 1'},
  {name: 'Name 2', type: 'Type 2', value: 'Value 2', nr: 'NR. 2'},
  {name: 'Name 3', type: 'Type 3', value: 'Value 3', nr: 'NR. 3'},
  {name: 'Name 4', type: 'Type 4', value: '?_?????_??????????????????_???_??????????????????????_????????????????x????????_???~??_?????????~??????_???????????????????????????????~??_??????w}?????????????????}????w??~?????{???_?_}??w?_????????????????7????????_??????_????U??{?????_????????_}??V???', nr: 'NR. 4'},
  {name: 'Name 5', type: 'Type 5', value: 'Value 5', nr: 'NR. 5'},
  {name: 'Name 6', type: 'Type 6', value: 'Value 6', nr: 'NR. 6'},
  {name: 'Name 7', type: 'Type 7', value: 'Value 7', nr: 'NR. 7'},
  {name: 'Name 8', type: 'Type 8', value: 'Value 8', nr: 'NR. 8'},
  {name: 'Name 9', type: 'Type 9', value: 'Value 9', nr: 'NR. 9'},
  {name: 'Name 10', type: 'Type 10', value: 'Value 10', nr: 'NR. 10'},
  {name: 'Name 11', type: 'Type 11', value: 'Value 11', nr: 'NR. 11'},
  {name: 'Name 12', type: 'Type 12', value: 'Value 12', nr: 'NR. 12'},
  {name: 'Name 13', type: 'Type 13', value: 'Value 13', nr: 'NR. 13'},
  {name: 'Name 14', type: 'Type 14', value: 'Value 14', nr: 'NR. 14'},
  {name: 'Name 15', type: 'Type 15', value: 'Value 15', nr: 'NR. 15'},
  {name: 'Name 16', type: 'Type 16', value: 'Value 16', nr: 'NR. 16'},
]

const exportPDF = async (filename: string) => {
  const { default: jsPDF } = await import('jspdf')
  const doc = new jsPDF({ orientation: 'landscape' })

  const { default: autoTable } = await import('jspdf-autotable')


  // Document title
  doc.text(`Title`, 15, 28)

  // Table
  autoTable(doc, {
    startY: 32,
    margin: { top: 25 },
    styles: { overflow: 'ellipsize' },
    head: [headers.map((h) => h.title)],
    body: data.map((item) => {
      const row: string[] = []
      headers.forEach((h) => row.push(item[h.key]))
      return row
    }),
  })

  const nrOfPages = doc.internal.pages.length - 1
  doc.internal.pages.forEach((_, page) => {
    doc.setPage(page)

    // Footer
    doc.setFontSize(8)
    doc.setFont('helvetica', 'italic')
    doc.text(
      `Page ${page} of ${nrOfPages}`,
      doc.internal.pageSize.width / 2,
      200,
      { align: 'center' },
    )
    doc.setFont('helvetica', 'normal')
  })

  doc.save(filename + '.pdf')
}

onMounted(() => {
  exportPDF('test')
})
</script>