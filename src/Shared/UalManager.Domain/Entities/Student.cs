using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UalManager.Domain.Shared.Interfaces;
namespace UalManager.Domain.Entities
{
    public class Student:IAudit
    {
        public int Id { get; set; }       
        public string Name { get; set; } 
        public DateTime BirthDate { get; set; }
        public string Street { get; set; }
        public string Vat { get; set; }
        public string Email { get; set; }
        public int MyProperty { get; set; }
    }
}