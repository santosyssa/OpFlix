using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class OpFlixContext : DbContext
    {
        public OpFlixContext()
        {
        }

        public OpFlixContext(DbContextOptions<OpFlixContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categorias> Categorias { get; set; }
        public virtual DbSet<Lancamentos> Lancamentos { get; set; }
        public virtual DbSet<Plataformas> Plataformas { get; set; }
        public virtual DbSet<Categorias> TiposLancamentos { get; set; }
        public virtual DbSet<TiposUsuarios> TiposUsuarios { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.\\SqlExpress; Initial Catalog=T_OpFlix;User Id=sa;Pwd=132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categorias>(entity =>
            {
                entity.HasKey(e => e.IdCategoria);

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Categori__7D8FE3B204EF9AF9")
                    .IsUnique();

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Lancamentos>(entity =>
            {
                entity.HasKey(e => e.IdLancamentos);

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Lancamen__7D8FE3B21917F1F8")
                    .IsUnique();

                entity.Property(e => e.Classificacao)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.DataLancamento)
                    .HasColumnName("Data_Lancamento")
                    .HasColumnType("date");

                entity.Property(e => e.DuracaoMin).HasColumnName("Duracao_Min");

                entity.Property(e => e.IdTipoLancamento).HasColumnName("IdTipo_Lancamento");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Sinopse)
                    .HasMaxLength(600)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.Lancamentos)
                    .HasForeignKey(d => d.IdCategoria)
                    .HasConstraintName("FK__Lancament__IdCat__5DCAEF64");

                entity.HasOne(d => d.IdPlataformaNavigation)
                    .WithMany(p => p.Lancamentos)
                    .HasForeignKey(d => d.IdPlataforma)
                    .HasConstraintName("FK__Lancament__IdPla__5CD6CB2B");

                entity.HasOne(d => d.IdTipoLancamentoNavigation)
                    .WithMany(p => p.Lancamentos)
                    .HasForeignKey(d => d.IdTipoLancamento)
                    .HasConstraintName("FK__Lancament__IdTip__5EBF139D");
            });

            modelBuilder.Entity<Plataformas>(entity =>
            {
                entity.HasKey(e => e.IdPlataforma);

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Platafor__7D8FE3B21253D8DA")
                    .IsUnique();

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Categorias>(entity =>
            {
                entity.HasKey(e => e.IdTipoLancamento);

                entity.ToTable("Tipos_Lancamentos");

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Tipos_La__7D8FE3B2C9CFF3A5")
                    .IsUnique();

                entity.Property(e => e.IdTipoLancamento).HasColumnName("IdTipo_Lancamento");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TiposUsuarios>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario);

                entity.ToTable("Tipos_Usuarios");

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Tipos_Us__7D8FE3B2B1F93FAF")
                    .IsUnique();

                entity.Property(e => e.IdTipoUsuario).HasColumnName("IdTipo_Usuario");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.HasKey(e => e.IdUsuario);

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuarios__A9D105341B10A464")
                    .IsUnique();

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Usuarios__7D8FE3B251E3C750")
                    .IsUnique();

                entity.HasIndex(e => e.Senha)
                    .HasName("UQ__Usuarios__7ABB97312D116248")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.IdTipoUsuario).HasColumnName("IdTipo_Usuario");

                entity.Property(e => e.Imagem)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuarios__IdTipo__59063A47");
            });
        }
    }
}
