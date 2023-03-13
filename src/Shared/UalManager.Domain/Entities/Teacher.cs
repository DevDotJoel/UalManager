using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UalManager.Domain.Entities
{
    public class Teacher
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime AdmissionDate { get; set; }
        public int UserId { get; set; }
    }
}
