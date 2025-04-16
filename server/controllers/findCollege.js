import db from '../config/db.js'

const find = (req, res) => {
   const { cat, rank, branch, district, region } = req.body;

  
   let query = `
      SELECT \`inst_code\`, \`institution_name\`, \`type\`, \`reg\`, \`district\`, \`place\`, 
             \`coed\`, \`affiliation\`, \`estd\`, \`a_reg\`, \`branch_code\`, \`${cat}\`
      FROM eapcetdata
      WHERE \`${cat}\` > ${rank}
   `;

   if (region && region.trim() !== '') {
      query += ` AND \`reg\` = '${region}'`;
   }

   if (branch && branch.trim() !== '') {
      query += ` AND \`branch_code\` = '${branch}'`;
   }

   if (district && district.trim() !== '') {
      query += ` AND \`district\` = '${district}'`;
   }

   query += ` ORDER BY \`${cat}\` ASC LIMIT 1, 40;`;

   db.query(query, (err, results) => {
      if (err) {
         console.error('DB query error:', err);
         return res.status(500).send('DB Error');
      }
      res.json(results);
   });
};

export default find;

